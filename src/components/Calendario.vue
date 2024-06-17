<template>
    <div class="calendar">
      <div class="header">
        <button class="nav-button" @click="previousMonth">&lt;</button>
        <h3 class="month-year">{{ monthName(currentMonth) }} {{ currentYear }}</h3>
        <button class="nav-button" @click="nextMonth">&gt;</button>
      </div>
      
      <div class="weekdays">
        <span v-for="day in weekdays" :key="day" class="weekday">{{ day }}</span>
      </div>
      
      <div class="days">
        <span
          v-for="day in calendarDays"
          :key="day.value"
          class="day"
          :class="[
            { 'prev-month': day.prevMonth, 'current-month': !day.prevMonth && !day.nextMonth },
            { 'selected': day.day === selectedDay && !day.prevMonth && !day.nextMonth },
            { 'disabled': !canSelectDay(day) }
          ]"
          @click="selectDay(day)"
        >
          {{ day.day }}
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth() + 1,
        months: [
          'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        calendarDays: [],
        selectedDay: null  // Adicionado para controlar o dia selecionado
      };
    },
    computed: {
      daysInMonth() {
        return new Date(this.currentYear, this.currentMonth, 0).getDate();
      },
      firstDayOfWeek() {
        return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
      }
    },
    methods: {
      updateCalendar() {
        this.selectedDay = null; // Limpa o dia selecionado ao atualizar o calendário
        this.calendarDays = this.generateCalendarDays();
      },
      generateCalendarDays() {
        const days = [];
        const daysInMonth = this.daysInMonth;
        const firstDayOfWeek = this.firstDayOfWeek;
  
        // Dias do mês anterior
        const prevMonthDays = new Date(this.currentYear, this.currentMonth - 1, 0).getDate();
  
        // Espaços em branco antes do primeiro dia do mês atual
        for (let i = 0; i < firstDayOfWeek; i++) {
          days.push({ day: prevMonthDays - firstDayOfWeek + i + 1, prevMonth: true });
        }
  
        // Dias do mês atual
        for (let i = 1; i <= daysInMonth; i++) {
          days.push({ day: i, prevMonth: false, nextMonth: false });
        }
  
        // Espaços em branco após o último dia do mês atual
        const totalDays = days.length;
        const remainingDays = 42 - totalDays; // 6 semanas * 7 dias
        for (let i = 1; i <= remainingDays; i++) {
          days.push({ day: i, nextMonth: true });
        }
  
        return days;
      },
      monthName(month) {
        return this.months[month - 1];
      },
      previousMonth() {
        if (this.currentMonth === 1) {
          this.currentMonth = 12;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
        this.updateCalendar();
      },
      nextMonth() {
        if (this.currentMonth === 12) {
          this.currentMonth = 1;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
        this.updateCalendar();
      },
      selectDay(day) {
        if (this.canSelectDay(day)) {
          this.selectedDay = day.day;
        }
      },
      canSelectDay(day) {
        // Verifica se o dia pertence ao mês atual
        if (day.prevMonth || day.nextMonth) {
          return false;
        }
  
        // Verifica se o dia é um sábado ou domingo
        const dayOfWeek = new Date(this.currentYear, this.currentMonth - 1, day.day).getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) { // 0 é Domingo, 6 é Sábado
          return false;
        }
  
        // Verifica se o dia já passou
        const today = new Date();
        const selectedDate = new Date(this.currentYear, this.currentMonth - 1, day.day);
        if (selectedDate < today) {
          return false;
        }
  
        return true;
      }
    },
    mounted() {
      // Inicializa o calendário ao montar o componente
      this.updateCalendar();
    }
  };
  </script>
  
  <style scoped>
  .calendar {
    font-family: Arial, sans-serif;
    margin: 20px auto;
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .nav-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  
  .month-year {
    margin: 0;
  }
  
  .weekdays {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .weekday {
    width: calc(100% / 7);
    text-align: center;
    font-weight: bold;
  }
  
  .days {
    display: flex;
    flex-wrap: wrap;
  }
  
  .day {
    width: calc(100% / 7);
    text-align: center;
    margin-bottom: 5px;
    cursor: pointer;
  }
  
  .prev-month {
    color: #ccc;
  }
  
  .current-month {
    color: #000;
  }
  
  .next-month {
    color: #ccc;
  }
  
  .selected {
    color: rgb(32, 181, 32);
    text-shadow: 1px 1px 2px #2f7122cc;
  }
  
  .disabled {
    opacity: 0.5;
  }
  </style>
  
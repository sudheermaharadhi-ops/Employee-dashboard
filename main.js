
const storyCtx = document.getElementById('storyChart').getContext('2d');
new Chart(storyCtx, {
  type: 'line',
  data: {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Stories Created',
      data: [1.2, 0.5, 0.1, 0.3, 0.7, 2.1],
      borderColor: '#3f51b5',
      backgroundColor: 'rgba(63, 81, 181, 0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

const fillerCtx = document.getElementById('fillerChart').getContext('2d');
new Chart(fillerCtx, {
  type: 'bar',
  data: {
    labels: ['Session 1', 'Session 2', 'Session 3'],
    datasets: [{
      label: 'Filler Words',
      data: [0.5, 0.3, 0.1],
      backgroundColor: '#7986cb'
    }]
  },
  options: {
    responsive: true
  }
});

const weakCtx = document.getElementById('weakChart').getContext('2d');
new Chart(weakCtx, {
  type: 'line',
  data: {
    labels: ['Session 1', 'Session 2', 'Session 3'],
    datasets: [{
      label: 'Weak Words',
      data: [6, 4, 1],
      borderColor: '#1e88e5',
      tension: 0.4
    }]
  },
  options: {
    responsive: true
  }
});

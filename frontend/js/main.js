// DETTAGLIOS Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all charts and interactions
    initializeCharts();
    initializeInteractions();
    
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card, [class*="card-gradient"]');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
});

function initializeCharts() {
    // Main Chart Configuration
    const mainChartCtx = document.getElementById('mainChart');
    if (mainChartCtx) {
        new Chart(mainChartCtx, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [
                    {
                        label: 'Flores',
                        data: [120, 190, 300, 500, 200, 300, 450, 300, 200, 150, 400, 350],
                        backgroundColor: 'rgba(212, 165, 199, 0.8)',
                        borderColor: 'rgba(212, 165, 199, 1)',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                    },
                    {
                        label: 'Globos',
                        data: [80, 120, 200, 300, 150, 250, 350, 200, 150, 100, 300, 250],
                        backgroundColor: 'rgba(166, 124, 148, 0.8)',
                        borderColor: 'rgba(166, 124, 148, 1)',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                    },
                    {
                        label: 'Arreglos',
                        data: [60, 90, 150, 200, 100, 180, 280, 150, 100, 80, 200, 180],
                        backgroundColor: 'rgba(168, 213, 168, 0.8)',
                        borderColor: 'rgba(168, 213, 168, 1)',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 12,
                                family: 'Inter',
                                weight: '500'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(166, 124, 148, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(212, 165, 199, 1)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6B7280',
                            font: {
                                size: 11,
                                family: 'Inter'
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(212, 165, 199, 0.1)',
                            borderDash: [5, 5]
                        },
                        ticks: {
                            color: '#6B7280',
                            font: {
                                size: 11,
                                family: 'Inter'
                            },
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    // Orders Mini Chart
    const ordersChartCtx = document.getElementById('ordersChart');
    if (ordersChartCtx) {
        new Chart(ordersChartCtx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', '', '', ''],
                datasets: [{
                    data: [30, 45, 35, 55, 40, 65, 50],
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        hoverBackgroundColor: 'rgba(255, 255, 255, 1)'
                    }
                },
                animation: {
                    duration: 800
                }
            }
        });
    }

    // Mini charts for popular products
    initializeMiniCharts();
}

function initializeMiniCharts() {
    // Mini chart 1 - Ramo de Rosas
    const miniChart1 = document.querySelector('.mini-chart-1');
    if (miniChart1) {
        new Chart(miniChart1, {
            type: 'line',
            data: {
                labels: ['', '', '', '', ''],
                datasets: [{
                    data: [20, 35, 25, 45, 40],
                    borderColor: 'rgba(212, 165, 199, 1)',
                    backgroundColor: 'rgba(212, 165, 199, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { display: false }, y: { display: false } }
            }
        });
    }
}

function initializeInteractions() {
    // Sidebar navigation
    const navLinks = document.querySelectorAll('aside nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('nav-active'));
            // Add active class to clicked link
            this.classList.add('nav-active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('input[placeholder="Buscar..."]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            // Implement search logic here
            console.log('Buscando:', query);
        });
    }

    // Dropdown toggles
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('[tabindex="0"]');
        if (toggle) {
            toggle.addEventListener('click', function() {
                dropdown.classList.toggle('dropdown-open');
            });
        }
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card, [class*="card-gradient"]');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Notification system
    initializeNotifications();

    // Auto-refresh data every 30 seconds
    setInterval(refreshDashboardData, 30000);
}

function initializeNotifications() {
    // Simulate real-time notifications
    const notifications = [
        { type: 'success', message: 'Nuevo pedido recibido', time: Date.now() },
        { type: 'info', message: 'Inventario actualizado', time: Date.now() - 300000 },
        { type: 'warning', message: 'Stock bajo en Rosas Rojas', time: Date.now() - 600000 }
    ];

    // Store notifications (in real app, this would be in a database)
    sessionStorage.setItem('notifications', JSON.stringify(notifications));
    
    // Update notification badge
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const notifications = JSON.parse(sessionStorage.getItem('notifications') || '[]');
    const unreadCount = notifications.filter(n => !n.read).length;
    
    const bellIcon = document.querySelector('.fa-bell');
    if (bellIcon && unreadCount > 0) {
        bellIcon.classList.add('text-pink-600');
        // Add notification badge
        if (!bellIcon.parentElement.querySelector('.badge')) {
            const badge = document.createElement('span');
            badge.className = 'badge badge-xs badge-primary absolute -top-1 -right-1';
            badge.textContent = unreadCount;
            bellIcon.parentElement.style.position = 'relative';
            bellIcon.parentElement.appendChild(badge);
        }
    }
}

function refreshDashboardData() {
    // Simulate data refresh
    console.log('Actualizando datos del dashboard...');
    
    // Update stats with animation
    const statsCards = document.querySelectorAll('[class*="card-gradient"] .text-3xl');
    statsCards.forEach(stat => {
        stat.style.transform = 'scale(1.05)';
        setTimeout(() => {
            stat.style.transform = 'scale(1)';
        }, 200);
    });

    // In a real application, you would fetch new data from your API
    // fetchDashboardData().then(data => updateDashboard(data));
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} fixed top-4 right-4 z-50 max-w-sm shadow-lg`;
    toast.innerHTML = `
        <div>
            <span>${message}</span>
        </div>
        <button onclick="this.parentElement.remove()" class="btn btn-ghost btn-sm">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other modules
window.DettagliosApp = {
    showToast,
    formatCurrency,
    formatDate,
    refreshDashboardData,
    updateNotificationBadge
};

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(registrationError => {
                console.log('SW registro falló:', registrationError);
            });
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder="Buscar..."]');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals/dropdowns
    if (e.key === 'Escape') {
        const openDropdowns = document.querySelectorAll('.dropdown-open');
        openDropdowns.forEach(dropdown => {
            dropdown.classList.remove('dropdown-open');
        });
    }
});

// Theme management
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Real-time data simulation
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Simulate new order
        if (Math.random() > 0.7) {
            showToast('Nuevo pedido recibido', 'success');
            
            // Update order count
            const orderCard = document.querySelector('.card-gradient-blue .text-3xl');
            if (orderCard) {
                const currentCount = parseInt(orderCard.textContent);
                orderCard.textContent = currentCount + 1;
            }
        }
        
        // Simulate stock alerts
        if (Math.random() > 0.9) {
            const products = ['Rosas Rojas', 'Globos Dorados', 'Claveles Blancos'];
            const product = products[Math.floor(Math.random() * products.length)];
            showToast(`Stock bajo en ${product}`, 'warning');
        }
    }, 15000); // Every 15 seconds
}

// Start real-time updates simulation
simulateRealTimeUpdates();
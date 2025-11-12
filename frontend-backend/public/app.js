// Application State
let currentPage = 'login';
let isAuthenticated = false;
let theme = 'dark';
let activeSidebarPage = 'dashboard';
// Persistent user profile details
let profileData = {
    employeeId: 'EMP-2024-001',
    firstName: 'Junho',
    middleName: 'Alexander',
    lastName: 'Leon',
    dob: '1990-05-15',
    gender: 'male',
    phone: '+1 (555) 123-4567',
    email: 'jl.safety@gmail.com',
    address: '123 Safety Boulevard, Suite 400, San Francisco, CA 94102',
    emergencyContact: '+1 (555) 987-6543',
    emergencyName: 'Sarah Leon (Spouse)',
    jobTitle: 'Senior Safety Engineer',
    department: 'Safety & Compliance',
    employmentStatus: 'Active',
    role: 'Administrator',
    startDate: '2020-01-15',
    supervisor: 'Michael Chen - Director of Safety'
};

// SVG Icons
const icons = {
    person: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>`,
    lock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>`,
    home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>`,
    user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>`,
    file: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
    </svg>`,
    mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`,
    wallet: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 12H3"></path>
        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
    </svg>`,
    folder: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>`,
    help: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>`,
    barChart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>`,
    settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3m15.364 6.364l-4.243-4.243m-4.242 0L5.636 17.364m12.728 0l-4.243-4.243m-4.242 0L5.636 6.636"></path>
    </svg>`,
    logout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>`,
    calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`,
    moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>`,
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>`,
    arrowDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>`
};

// Additional icons used across modules
icons.search = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`;
icons.filter = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polygon points="22 3 2 3 10 12 10 19 14 21 14 12 22 3"></polygon>
</svg>`;
icons.package = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16.5 9.4 7.5 4.21"></path>
    <path d="m21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="M3.3 7l8.7 5 8.7-5"></path>
</svg>`;
icons.shoppingCart = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h3l.4 2M6 5h14l-1.5 7h-12z"></path>
</svg>`;

function statusBadge(status) {
    const map = {
        'In Stock': 'badge badge-green',
        'Delivered': 'badge badge-green',
        'Low Stock': 'badge badge-yellow',
        'Pending': 'badge badge-yellow',
        'Out of Stock': 'badge badge-red',
        'Cancelled': 'badge badge-red',
        'Approved': 'badge badge-blue',
        'In Transit': 'badge badge-purple'
    }
    return `<span class="${map[status] || 'badge'}">${status}</span>`;
}


// Login Page
function renderLoginPage() {
    return `
        <div class="login-container">
            <div class="login-header">
                <div class="logo-container">
                    <img src="LOGO.png" alt="LinkENERGIÉ Logo" class="logo-image" data-dark-src="LOGO2.png">
                </div>
                <img src="SYSTEM NAME below the logo.png" alt="LinkENERGIÉ" class="system-name-image" data-dark-src="SYSTEM NAME below the logo.png" data-light-src="subtitle2.png">
            </div>
            <div class="login-card">
                <h2 class="login-title">Sign in</h2>
                <p class="login-subtitle">Sign in to your account to track and manage your projects.</p>
                <form id="loginForm">
                    <div class="form-group">
                        <label class="form-label-dark">Username</label>
                        <div class="input-wrapper">
                            <span class="input-icon">${icons.person}</span>
                            <input type="text" class="form-input" placeholder="Account" name="username" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="password-wrapper">
                            <label class="form-label-dark">Password</label>
                            <a href="#" class="forgot-link">Forgot Password?</a>
                        </div>
                        <div class="input-wrapper">
                            <span class="input-icon">${icons.lock}</span>
                            <input type="password" class="form-input" placeholder="Password" name="password" required>
                        </div>
                    </div>
                    <button type="submit" class="btn-primary">Sign in</button>
                </form>
                <div class="signup-link">
                    Don't have an account? <a href="#" id="signupLink">Sign up</a>
                </div>
            </div>
        </div>
    `;
}

// Registration Page
function renderRegistrationPage() {
    return `
        <div class="registration-page">
            <header class="registration-header">
                <img src="LOGO2.png" alt="LinkENERGIÉ Logo" class="registration-logo">
                <img src="SYSTEM NAME below the logo.png" alt="LinkENERGIÉ" class="registration-system-name">
            </header>
            <div class="registration-container">
                <div class="registration-form-card">
                    <h2 class="registration-form-title">Registration Form</h2>
                    <form id="registrationForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label-dark">First Name:</label>
                                <input type="text" class="form-input-light" placeholder="John" name="firstName" required tabindex="0">
                                <span class="error-message" id="firstNameError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Middle Name:</label>
                                <input type="text" class="form-input-light" placeholder="Doe" name="middleName" required tabindex="0">
                                <span class="error-message" id="middleNameError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Last Name:</label>
                                <input type="text" class="form-input-light" placeholder="Smith" name="lastName" required tabindex="0">
                                <span class="error-message" id="lastNameError"></span>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label-dark">Email Address:</label>
                                <input type="email" class="form-input-light" placeholder="name@example.com" name="email" required tabindex="0">
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Phone Number:</label>
                                <input type="tel" class="form-input-light" placeholder="09123456789" name="phoneNumber" required tabindex="0">
                                <span class="error-message" id="phoneNumberError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Birthday:</label>
                                 <div class="date-input-wrapper">
                                    <input
                                         type="date"
                                         class="form-input-light"
                                         placeholder="yyyy-mm-dd"
                                         name="dateOfBirth"
                                        required
                                        tabindex="0"
                                    >
                                <span class="calendar-icon">${icons.calendar}</span>
                            </div>
                            </div>
                        </div>
                        <div class="form-row full">
                            <div class="form-group">
                                <label class="form-label-dark">Address:</label>
                                <input type="text" class="form-input-light" placeholder="Barangay 1, Bacolod City" name="address" required tabindex="0">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label-dark">Job Title:</label>
                                <input type="text" class="form-input-light" placeholder="Programmer" name="jobTitle" required tabindex="0">
                                <span class="error-message" id="jobTitleError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Employment Status:</label>
                                <div class="select-wrapper" style="position: relative;">
                                    <select class="form-select-light" name="employmentStatus" required tabindex="0">
                                        <option value="">Select status</option>
                                        <option value="full-time">Full-time</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="contract">Contract</option>
                                        <option value="temporary">Temporary</option>
                                    </select>
                                    <span class="select-arrow" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;">${icons.arrowDown}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label-dark">Employee ID:</label>
                                <input type="text" class="form-input-light" placeholder="Enter employee ID" name="employeeId" required tabindex="0">
                                <span class="error-message" id="employeeIdError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Gender:</label>
                                <div class="select-wrapper" style="position: relative;">
                                    <select class="form-select-light" name="gender" required tabindex="0">
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <span class="select-arrow" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;">${icons.arrowDown}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label-dark">Emergency Contact Number:</label>
                                <input type="tel" class="form-input-light" placeholder="Enter emergency contact" name="emergencyContact" required tabindex="0">
                                <span class="error-message" id="emergencyContactError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label-dark">Department:</label>
                                <input type="text" class="form-input-light" placeholder="Enter department" name="department" required tabindex="0">
                            </div>
                        </div>

                    </form>
                    <div class="form-actions">
                        <button type="submit" class="btn-submit" form="registrationForm">Submit form</button>
                    </div>
                    <div class="back-to-login-container">
                        <button type="button" class="btn-submit btn-back" id="backToLoginBtn">Back to Login</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Dashboard Page
function renderSidebar() {
    return `
        <aside class="sidebar">
            <div class="user-profile">
                <div class="user-avatar">JL</div>
                <div class="user-info">
                    <div class="user-name">Junho Leon <span style="display:inline-flex;align-items:center;margin-left:-5px;">${icons.arrowDown}</span></div>
                    <div class="user-email">jl.safety@gmail.com</div>
                </div>
            </div>
            <div class="sidebar-divider"></div>
            <nav class="sidebar-menu">
                <a href="#" class="menu-item ${activeSidebarPage==='dashboard'?'active':''}" data-page="dashboard" tabindex="0"><span class="menu-icon">${icons.home}</span><span>Home</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='profile'?'active':''}" data-page="profile" tabindex="0"><span class="menu-icon">${icons.user}</span><span>User Profile</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='procurement'?'active':''}" data-page="procurement" tabindex="0"><span class="menu-icon">${icons.file}</span><span>Procurement and Inventory</span><span class="menu-badge">99+</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='site'?'active':''}" data-page="site" tabindex="0"><span class="menu-icon">${icons.mapPin}</span><span>Site Management</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='workforce'?'active':''}" data-page="workforce" tabindex="0"><span class="menu-icon">${icons.users}</span><span>Workforce Management</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='budget'?'active':''}" data-page="budget" tabindex="0"><span class="menu-icon">${icons.wallet}</span><span>Budget and Cost Control</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='documents'?'active':''}" data-page="documents" tabindex="0"><span class="menu-icon">${icons.folder}</span><span>Document Management</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='help'?'active':''}" data-page="help" tabindex="0"><span class="menu-icon">${icons.help}</span><span>Help</span></a>
                <a href="#" class="menu-item ${activeSidebarPage==='analytics'?'active':''}" data-page="analytics" tabindex="0"><span class="menu-icon">${icons.barChart}</span><span>Analytics</span></a>
                <a href="#" class="menu-item" data-page="settings" tabindex="0"><span class="menu-icon">${icons.settings}</span><span>Setting</span><span style="display:inline-flex;align-items:center;margin-left:auto;">${icons.arrowDown}</span></a>
                <a href="#" class="menu-item" data-page="logout" tabindex="0"><span class="menu-icon">${icons.logout}</span><span>Logout</span></a>
            </nav>
        </aside>
    `;
}


function renderDashboardPage() {
    return `
        <div class="dashboard-container">
            <nav class="top-nav">
                <div class="nav-logo">
                    <img src="LOGO2.png" alt="LinkENERGIÉ Logo" class="nav-logo-image" data-dark-src="LOGO3A.png" data-light-src="LOGO3A.png" />
                    <img src="SYSTEM NAME below the logo.png" alt="LinkENERGIÉ" class="nav-name-image" data-dark-src="subtitle2.png" data-light-src="subtitle2.png" />
                </div>
                <div class="nav-links">
                    <a href="#" class="nav-link active" data-nav="dashboard" tabindex="0">Dashboard</a>
                    <a href="#" class="nav-link" data-nav="projects" tabindex="0">Our projects</a>
                    <a href="#" class="nav-link" data-nav="contact" tabindex="0">Contact us</a>
                </div>
            </nav>
            <aside class="sidebar">
                <div class="user-profile">
                    <div class="user-avatar">JL</div>
                    <div class="user-info">
                        <div class="user-name">
                            Junho Leon
                            <span style="display: inline-flex; align-items: center; margin-left: -5px;">${icons.arrowDown}</span>
                        </div>
                        <div class="user-email">jl.safety@gmail.com</div>
                    </div>
                </div>
                <div class="sidebar-divider"></div>
                <nav class="sidebar-menu">
                    <a href="#" class="menu-item active" data-page="dashboard" tabindex="0">
                        <span class="menu-icon">${icons.home}</span>
                        <span>Home</span>
                    </a>
                    <a href="#" class="menu-item" data-page="profile" tabindex="0">
                        <span class="menu-icon">${icons.user}</span>
                        <span>User Profile</span>
                    </a>
                    <a href="#" class="menu-item" data-page="procurement" tabindex="0">
                        <span class="menu-icon">${icons.file}</span>
                        <span>Procurement and Inventory</span>
                        <span class="menu-badge">99+</span>
                    </a>
                    <a href="#" class="menu-item" data-page="site" tabindex="0">
                        <span class="menu-icon">${icons.mapPin}</span>
                        <span>Site Management</span>
                    </a>
                    <a href="#" class="menu-item" data-page="workforce" tabindex="0">
                        <span class="menu-icon">${icons.users}</span>
                        <span>Workforce Management</span>
                    </a>
                    <a href="#" class="menu-item" data-page="budget" tabindex="0">
                        <span class="menu-icon">${icons.wallet}</span>
                        <span>Budget and Cost Control</span>
                    </a>
                    <a href="#" class="menu-item" data-page="documents" tabindex="0">
                        <span class="menu-icon">${icons.folder}</span>
                        <span>Document Management</span>
                    </a>
                    <a href="#" class="menu-item" data-page="help" tabindex="0">
                        <span class="menu-icon">${icons.help}</span>
                        <span>Help</span>
                    </a>
                    <a href="#" class="menu-item" data-page="analytics" tabindex="0">
                        <span class="menu-icon">${icons.barChart}</span>
                        <span>Analytics</span>
                    </a>
                    <a href="#" class="menu-item" data-page="settings" tabindex="0">
                        <span class="menu-icon">${icons.settings}</span>
                        <span>Setting</span>
                        <span style="display: inline-flex; align-items: center; margin-left: auto;">${icons.arrowDown}</span>
                    </a>
                    <a href="#" class="menu-item" data-page="logout" tabindex="0">
                        <span class="menu-icon">${icons.logout}</span>
                        <span>Logout</span>
                    </a>
                </nav>
            </aside>
            <main class="main-content">
                <div class="page-header">
                    <h1 class="page-title">Dashboard</h1>
                    <p class="welcome-message">Welcome back, Junho Leon</p>
                </div>
                <div class="dashboard-grid">
                    <div class="stat-card">
                        <div class="stat-icon blue">${icons.briefcase}</div>
                        <div class="stat-content">
                            <div class="stat-label">Active Projects</div>
                            <div class="stat-value">24</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon green">${icons.users}</div>
                        <div class="stat-content">
                            <div class="stat-label">Total Employees</div>
                            <div class="stat-value">156</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon purple">${icons.folder}</div>
                        <div class="stat-content">
                            <div class="stat-label">Documents</div>
                            <div class="stat-value">1,247</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon orange">${icons.barChart}</div>
                        <div class="stat-content">
                            <div class="stat-label">Budget Utilization</div>
                            <div class="stat-value">87%</div>
                        </div>
                    </div>
                </div>
                <div class="content-grid">
                    <div class="content-card">
                        <h3 class="card-title">Recent Activities</h3>
                        <div class="activity-list">
                            <div class="activity-item">
                                <div class="activity-dot"></div>
                                <div class="activity-content">
                                    <div class="activity-text">New Safety Report Submitted</div>
                                    <div class="activity-time">2 hours ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-dot"></div>
                                <div class="activity-content">
                                    <div class="activity-text">Budget Updated for Building A</div>
                                    <div class="activity-time">5 hours ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-dot"></div>
                                <div class="activity-content">
                                    <div class="activity-text">Site Inspection Completed</div>
                                    <div class="activity-time">1 day ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-dot"></div>
                                <div class="activity-content">
                                    <div class="activity-text">New Employee Onboarded</div>
                                    <div class="activity-time">2 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-card">
                        <h3 class="card-title">
                            <span class="menu-icon">${icons.calendar}</span>
                            Upcoming Events
                        </h3>
                        <div class="activity-list">
                            <div class="event-item">
                                <div class="event-title">Safety Training Session</div>
                                <div class="event-date">October 15, 2025 • 9:00 AM</div>
                            </div>
                            <div class="event-item">
                                <div class="event-title">Project Review Meeting</div>
                                <div class="event-date">October 16, 2025 • 2:00 PM</div>
                            </div>
                            <div class="event-item">
                                <div class="event-title">Site Inspection - Building B</div>
                                <div class="event-date">October 18, 2025 • 10:00 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;
}

// Settings Page
function renderSettingsPage() {
    return `
        <div class="dashboard-container">
            <nav class="top-nav">
                <div class="nav-logo">
                    <img src="LOGO2.png" alt="LinkENERGIÉ Logo" class="nav-logo-image" data-dark-src="LOGO3A.png" data-light-src="LOGO3A.png" />
                    <img src="SYSTEM NAME below the logo.png" alt="LinkENERGIÉ" class="nav-name-image" data-dark-src="subtitle2.png" data-light-src="subtitle2.png" />
                </div>
                <div class="nav-links">
                    <a href="#" class="nav-link active" data-nav="dashboard">Dashboard</a>
                    <a href="#" class="nav-link" data-nav="projects">Our projects</a>
                    <a href="#" class="nav-link" data-nav="contact">Contact us</a>
                </div>
            </nav>
            <aside class="sidebar">
                <div class="user-profile">
                    <div class="user-avatar">JL</div>
                    <div class="user-info">
                        <div class="user-name">
                            Junho Leon
                            <span style="display: inline-flex; align-items: center;">${icons.arrowDown}</span>
                        </div>
                        <div class="user-email">jl.safety@gmail.com</div>
                    </div>
                </div>
                <div class="sidebar-divider"></div>
                <nav class="sidebar-menu">
                    <a href="#" class="menu-item" data-page="dashboard">
                        <span class="menu-icon">${icons.home}</span>
                        <span>Home</span>
                    </a>
                    <a href="#" class="menu-item" data-page="profile">
                        <span class="menu-icon">${icons.user}</span>
                        <span>User Profile</span>
                    </a>
                    <a href="#" class="menu-item" data-page="procurement">
                        <span class="menu-icon">${icons.file}</span>
                        <span>Procurement and Inventory</span>
                        <span class="menu-badge">99+</span>
                    </a>
                    <a href="#" class="menu-item" data-page="site">
                        <span class="menu-icon">${icons.mapPin}</span>
                        <span>Site Management</span>
                    </a>
                    <a href="#" class="menu-item" data-page="workforce">
                        <span class="menu-icon">${icons.users}</span>
                        <span>Workforce Management</span>
                    </a>
                    <a href="#" class="menu-item" data-page="budget">
                        <span class="menu-icon">${icons.wallet}</span>
                        <span>Budget and Cost Control</span>
                    </a>
                    <a href="#" class="menu-item" data-page="documents">
                        <span class="menu-icon">${icons.folder}</span>
                        <span>Document Management</span>
                    </a>
                    <a href="#" class="menu-item" data-page="help">
                        <span class="menu-icon">${icons.help}</span>
                        <span>Help</span>
                    </a>
                    <a href="#" class="menu-item" data-page="analytics">
                        <span class="menu-icon">${icons.barChart}</span>
                        <span>Analytics</span>
                    </a>
                    <a href="#" class="menu-item active" data-page="settings">
                        <span class="menu-icon">${icons.settings}</span>
                        <span>Setting</span>
                        <span style="display: inline-flex; align-items: center; margin-left: -5px;">${icons.arrowDown}</span>
                    </a>
                    <a href="#" class="menu-item" data-page="logout">
                        <span class="menu-icon">${icons.logout}</span>
                        <span>Logout</span>
                    </a>
                </nav>
            </aside>
            <main class="main-content">
                <div class="page-header">
                    <h1 class="page-title">Settings</h1>
                    <p class="page-subtitle">Customize your application preferences</p>
                </div>
                <div class="settings-section">
                    <h3 class="section-title">Appearance</h3>
                    <div class="appearance-option">
                        <div class="appearance-label">
                            <span class="appearance-icon">${icons.moon}</span>
                            <span class="appearance-text">Dark theme is enabled</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="themeToggle" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </main>
        </div>
    `;
}

// Render function
function render() {
    const app = document.getElementById('app');
    
    switch(currentPage) {
        case 'login':
            app.innerHTML = renderLoginPage();
            attachLoginHandlers();
            break;
        case 'registration':
            app.innerHTML = renderRegistrationPage();
            attachRegistrationHandlers();
            break;
        case 'dashboard':
            app.innerHTML = renderDashboardPage();
            attachDashboardHandlers();
            break;
        case 'settings':
            app.innerHTML = renderSettingsPage();
            attachSettingsHandlers();
            break;
        default:
            app.innerHTML = renderLoginPage();
            attachLoginHandlers();
    }
}

// Event Handlers
function attachLoginHandlers() {
    const loginForm = document.getElementById('loginForm');
    const signupLink = document.getElementById('signupLink');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            isAuthenticated = true;
            saveAuthState();
            currentPage = 'dashboard';
            render();
        });
    }
    
    if (signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = 'registration';
            render();
        });
    }
}

function attachRegistrationHandlers() {
    const registrationForm = document.getElementById('registrationForm');
    const backToLoginBtn = document.getElementById('backToLoginBtn');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = registrationForm.firstName.value.trim();
            const middleName = registrationForm.middleName.value.trim();
            const lastName = registrationForm.lastName.value.trim();
            const phoneNumber = registrationForm.phoneNumber.value.trim();
            const emergencyContact = registrationForm.emergencyContact.value.trim();
            const jobTitle = registrationForm.jobTitle.value.trim();
            const employeeId = registrationForm.employeeId.value.trim();

            const firstNameError = document.getElementById('firstNameError');
            const middleNameError = document.getElementById('middleNameError');
            const lastNameError = document.getElementById('lastNameError');
            const phoneNumberError = document.getElementById('phoneNumberError');
            const emergencyContactError = document.getElementById('emergencyContactError');
            const jobTitleError = document.getElementById('jobTitleError');
            const employeeIdError = document.getElementById('employeeIdError');

            // Clear previous errors
            firstNameError.textContent = '';
            middleNameError.textContent = '';
            lastNameError.textContent = '';
            phoneNumberError.textContent = '';
            emergencyContactError.textContent = '';
            jobTitleError.textContent = '';
            employeeIdError.textContent = '';

            let hasError = false;

            if (!firstName) {
                firstNameError.textContent = 'First name is required.';
                hasError = true;
            } else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
                firstNameError.textContent = 'First name can only contain letters and spaces.';
                hasError = true;
            }

            if (!middleName) {
                middleNameError.textContent = 'Middle name is required.';
                hasError = true;
            } else if (!/^[a-zA-Z\s]+$/.test(middleName)) {
                middleNameError.textContent = 'Middle name can only contain letters and spaces.';
                hasError = true;
            }

            if (!lastName) {
                lastNameError.textContent = 'Last name is required.';
                hasError = true;
            } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
                lastNameError.textContent = 'Last name can only contain letters and spaces.';
                hasError = true;
            }

            if (!phoneNumber) {
                phoneNumberError.textContent = 'Phone number is required.';
                hasError = true;
            } else if (!/^09\d{9}$/.test(phoneNumber)) {
                phoneNumberError.textContent = 'Must start with 09 and be 11 digits long.';
                hasError = true;
            }

            if (!emergencyContact) {
                emergencyContactError.textContent = 'Emergency contact number is required.';
                hasError = true;
            } else if (!/^09\d{9}$/.test(emergencyContact)) {
                emergencyContactError.textContent = 'Must start with 09 and be 11 digits long.';
                hasError = true;
            }

            if (!jobTitle) {
                jobTitleError.textContent = 'Job title is required.';
                hasError = true;
            } else if (!/^[a-zA-Z\s]+$/.test(jobTitle)) {
                jobTitleError.textContent = 'Job title can only contain letters and spaces.';
                hasError = true;
            }

            if (!employeeId) {
                employeeIdError.textContent = 'Employee ID is required.';
                hasError = true;
            } else if (!/^\d+$/.test(employeeId)) {
                employeeIdError.textContent = 'Employee ID can only contain digits.';
                hasError = true;
            }

            if (hasError) {
                return;
            }

            alert('Registration successful! Redirecting to login...');
            currentPage = 'login';
            render();
        });
    }

    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const form = document.getElementById('registrationForm');
            const inputs = form.querySelectorAll('input, select');
            let hasInput = false;
            inputs.forEach(input => {
                if (input.value.trim() !== '') {
                    hasInput = true;
                }
            });
            if (hasInput) {
                if (!confirm('Are you sure you want to go back to login? Any entered data will be lost.')) {
                    return;
                }
            }
            currentPage = 'login';
            render();
        });
    }
}

function attachDashboardHandlers() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');

            if (page === 'logout') {
                isAuthenticated = false;
                saveAuthState();
                currentPage = 'login';
            } else {
                currentPage = page;
            }

            render();
        });
    });
}

function attachSettingsHandlers() {
    const themeToggle = document.getElementById('themeToggle');
    const themePreviews = document.querySelectorAll('.theme-preview-card[data-theme]');
    const menuItems = document.querySelectorAll('.menu-item[data-page]');
    
    if (themeToggle) {
        // Set initial state
        themeToggle.checked = theme === 'dark';
        
        themeToggle.addEventListener('change', (e) => {
            theme = e.target.checked ? 'dark' : 'light';
            document.body.className = theme;
            document.body.classList.remove('dark', 'light');
            document.body.classList.add(theme);
            // Swap theme-specific images (logo/title) when toggled
            document.querySelectorAll('[data-dark-src][data-light-src]').forEach(img => {
                const darkSrc = img.getAttribute('data-dark-src');
                const lightSrc = img.getAttribute('data-light-src');
                img.setAttribute('src', theme === 'light' ? lightSrc : darkSrc);
            });
            saveThemeState();
            updateThemePreviews();
        });
    }
    
    themePreviews.forEach(preview => {
        preview.addEventListener('click', () => {
            const selectedTheme = preview.getAttribute('data-theme');
            theme = selectedTheme;
            document.body.className = '';
            document.body.classList.add(theme);
            if (themeToggle) {
                themeToggle.checked = theme === 'dark';
            }
            // Swap theme-specific images (logo/title) when card is clicked
            document.querySelectorAll('[data-dark-src][data-light-src]').forEach(img => {
                const darkSrc = img.getAttribute('data-dark-src');
                const lightSrc = img.getAttribute('data-light-src');
                img.setAttribute('src', theme === 'light' ? lightSrc : darkSrc);
            });
            saveThemeState();
            updateThemePreviews();
        });
    });
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');
            if (page === 'logout') {
                isAuthenticated = false;
                saveAuthState();
                currentPage = 'login';
            } else if (page === 'dashboard') {
                currentPage = 'dashboard';
            } else {
                currentPage = 'dashboard';
            }
            render();
        });
    });
    
    function updateThemePreviews() {
        themePreviews.forEach(preview => {
            preview.classList.remove('active');
            if (preview.getAttribute('data-theme') === theme) {
                preview.classList.add('active');
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is authenticated
    const savedAuth = localStorage.getItem('isAuthenticated');
    if (savedAuth === 'true') {
        isAuthenticated = true;
        currentPage = 'dashboard';
    }
    
    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        theme = savedTheme;
        document.body.className = '';
        document.body.classList.add(theme);
    } else {
        theme = 'dark';
        document.body.className = '';
        document.body.classList.add('dark');
    }
    // Ensure theme-specific images are correct on initial load
    document.querySelectorAll('[data-dark-src][data-light-src]').forEach(img => {
        const darkSrc = img.getAttribute('data-dark-src');
        const lightSrc = img.getAttribute('data-light-src');
        img.setAttribute('src', theme === 'light' ? lightSrc : darkSrc);
    });
    
    render();
});

// Save authentication state
function saveAuthState() {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
}

// Save theme state
function saveThemeState() {
    localStorage.setItem('theme', theme);
}

# 🏪 SariStoreMS!!

🌟**Hello!! Welcome to my SariStoreMS repo!!**

This is my biggest project so far - a full-stack Point-of-Sale system for Filipino sari-sari stores! What started as a simple command-line program during my 1st year college has now evolved into this web application. From terminal commands to fancy web interfaces - that's character development right there! 😎

## ⁉️ What the heck is SariStoreMS??

**SariStoreMS** = **Sari**-sari **Store** **M**anagement **S**ystem

It's basically a modern POS system designed specifically for our beloved Filipino sari-sari stores! You know, those neighborhood stores na may utang system, barya problems, at walang proper inventory tracking? Yeah, this system tries to solve those headaches!

### 🎯 Features:
- **POS System** - For fast transactions (goodbye manual calculations!)
- **Inventory Management** - Track your products, know when stocks are low
- **Credit Management** - Handle "utang" properly with digital records
- **Reports & Analytics** - See which products are bestsellers, daily sales, etc.

### 💻 Tech Stack (STEP'N):
Yeah, I know the name sounds weird, but hey - I made it up! 😅

- **S**velte + TypeScript (Frontend)
- **T**ypeScript 
- **E**xpress.js (Backend API)
- **P**ostgreSQL (Database)
- **'N**ode.js (Runtime)

*"Just steppin' through full-stack development!"* 🕺

**Desktop-only** application - perfect for actual store counters!

## 🚀 Why I built this??

As a Filipino programmer, I see how our local sari-sari stores struggle with:
- Manual record keeping (yung papel na notebook system)
- Utang tracking (sino ba may utang, magkano na)
- Inventory management (laging nauubusan ng bigas!)
- No proper sales reports

So I thought, "Why not build something that actually helps our kababayans?" Plus, it's a great way to practice full-stack development! Win-win! 🇵🇭

## 🛠 Getting Started

### Prerequisites:
- Node.js (v18+)
- PostgreSQL 
- Basic knowledge of terminal/command prompt

### Installation:
```bash
# Clone this bad boy
git clone https://github.com/Darkuz69/SariStoreMS.git
cd SariStoreMS

# Install everything at once (life saver!)
npm run install:all

# Or install separately if you want
npm run install:server
npm run install:client

# Setup environment
cd server
cp .env.example .env
# Edit .env with your database credentials

# Initialize database
npm run init:server

# Start both servers (the magic command!)
npm run dev
```

### 🎮 Available Commands:
```bash
npm run dev          # Start both frontend & backend (main command)
npm run dev:server   # Only backend (for API testing)
npm run dev:client   # Only frontend (for UI work)
npm run init:server  # Setup database tables
npm run install:all  # Install all dependencies
```

## 📁 Project Structure
```
SariStoreMS/
├── client/     # Svelte frontend (the pretty UI)
├── server/     # Express backend (the brain)
├── docs/       # Documentation 
└── README.md   # You are here!
```

## 🛣 Roadmap

- [x] **Basic setup** - Project structure, database models
- [ ] **Core POS** - Transaction processing, receipt printing
- [ ] **Inventory System** - Product management, stock tracking  
- [ ] **Credit Management** - Customer accounts, utang tracking
- [ ] **Reports Dashboard** - Sales analytics, profit insights
- [ ] **Multi-store Support** - For those who have multiple branches
- [ ] **Mobile App** - Companion app for store owners

## 🤝 Want to contribute??

Sure! I'm always open to suggestions, especially from:
- Fellow Filipino developers
- Actual sari-sari store owners who can give feedback
- Anyone who wants to help improve small businesses in PH!

Just create an issue or PR. Let's make this system even better! 💪

---

**Made with ❤️ and lots of coffee** ☕

*"From command-line noob to full-stack developer - one sari-sari store at a time!"* 

P.S. - If you're a sari-sari store owner and want to try this system, hit me up! I'd love to get feedback from actual users! 🏪
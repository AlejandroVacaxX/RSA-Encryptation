# 🔐 RSA Encryption Tool

Un proyecto interactivo que implementa el algoritmo de encriptación RSA usando Electron, Node.js y DeepSeek.

![RSA Demo](https://via.placeholder.com/800x400?text=RSA+Encryption+Demo)

## 📦 Dependencias Requeridas

### Core
- `electron`: ^28.0.0
- `node-rsa`: ^1.1.1
- `deepseek`: ^2.3.0 (API para integraciones avanzadas)

### Desarrollo
- `electron-builder`: ^24.9.1
- `electron-reloader`: ^1.2.3
- `eslint`: ^8.56.0

### Frontend
- `react`: ^18.2.0
- `tailwindcss`: ^3.4.0
- `crypto-js`: ^4.1.1

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/rsa-electron-tool.git
cd rsa-electron-tool

## ✨ Características Principales

### 🔑 Generación de Claves RSA
```javascript
const { generateKeyPair } = require('node-rsa');
// Ejemplo: Generación de claves 2048-bit
const key = new NodeRSA({ b: 2048 });
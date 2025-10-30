# Desenvolvimento no Termux - Poco M6 Pro 5G

## 🚀 Comandos Úteis

### Iniciar desenvolvimento
```bash
./dev.sh
# ou
pnpm dev
```

### Build para produção
```bash
pnpm build
```

### Preview da build
```bash
pnpm preview
```

## 📱 Dicas para Desenvolvimento Mobile

1. **Salvar bateria**: Use `pnpm dev` apenas quando necessário
2. **Editor**: Instale `nano` ou use apps como Acode/Spck Editor
3. **Terminal**: Use Termux:Widget para atalhos rápidos
4. **Navegador**: Acesse `http://localhost:5173` no Chrome/Firefox

## 🔧 Ferramentas Instaladas

- Node.js LTS
- pnpm (gerenciador de pacotes)
- Vite
- React 18
- TypeScript
- Mantine UI

## 📚 Recursos

- [Vite](https://vitejs.dev)
- [Mantine](https://mantine.dev)
- [React](https://react.dev)

## 🐛 Problemas Comuns

**Porta ocupada?**
```bash
pkill -f vite
```

**Memória cheia?**
```bash
pnpm store prune
```

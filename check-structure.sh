#!/data/data/com.termux/files/usr/bin/bash

echo "🔍 Verificando estrutura do projeto..."
echo ""

dirs=("src/assets" "src/components" "src/hooks" "src/utils" "src/types" "src/constants")

for dir in "${dirs[@]}"; do
  if [ -d "$dir" ]; then
    echo "✅ $dir"
  else
    echo "❌ $dir (faltando)"
  fi
done

echo ""
echo "📁 Estrutura de arquivos:"
tree -L 2 src/ 2>/dev/null || find src/ -type f | sort

echo ""
echo "📊 Estatísticas:"
echo "Componentes: $(find src/components -name '*.tsx' 2>/dev/null | wc -l)"
echo "Hooks: $(find src/hooks -name '*.ts' 2>/dev/null | wc -l)"
echo "Utils: $(find src/utils -name '*.ts' 2>/dev/null | wc -l)"
echo ""

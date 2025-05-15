#!/bin/bash

# 1. Build + export
npm run build

# 2. Jeśli deploy/ nie istnieje, klonujemy tylko branch deploy
if [ ! -d deploy ]; then
  git clone --branch deploy https://MichalKrokosz@github.com/MichalKrokosz/MlodyAlbert.git deploy
fi

# 3. Kopiujemy zawartość `out/` do `deploy/`
rsync -av --delete out/ deploy/

# 4. Wysyłamy zmiany (commit + push tylko jeśli coś się zmieniło)
cd deploy
git add .
if ! git diff --cached --quiet; then
  git commit -m "Deploy: $(date)"
  git push --force origin deploy

else
  echo "Brak zmian do wypchnięcia."
fi
cd ..

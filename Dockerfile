# Stage 1: Build da aplicação SPA Vue com Vite
FROM node:20-alpine AS build-stage

WORKDIR /app

# Variável de build para baseURL da API (Vite injeta em tempo de build)
ARG VITE_API_URL=http://localhost:5000
ENV VITE_API_URL=$VITE_API_URL

# Instalar dependências usando yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copiar arquivos da aplicação e compilar
COPY . .
RUN yarn build

# Stage 2: Servir os arquivos estáticos via Nginx
FROM nginx:alpine

# Copiar arquivos compilados
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copiar configuração do Nginx com fallback de SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

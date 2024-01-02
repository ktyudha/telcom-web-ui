# Gunakan image node versi terbaru sebagai base image
FROM node:latest

# Set working directory di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json untuk instalasi dependensi
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Jalankan perintah build untuk aplikasi Vue.js
RUN npm run build

# Port yang akan digunakan oleh aplikasi Vue.js
EXPOSE 8080

# Perintah untuk menjalankan aplikasi Vue.js
CMD ["npm", "run", "serve"]




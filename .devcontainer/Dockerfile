FROM mcr.microsoft.com/devcontainers/php:8.2

# Install Laravel & Extensions
RUN apt-get update \
    && apt-get install -y \
        libzip-dev \
        unzip \
        git \
        curl \
        libpng-dev \
        libonig-dev \
        libxml2-dev \
    && docker-php-ext-install pdo_mysql zip

# Install Composer globally
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /workspace

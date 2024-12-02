FROM node:23

# create and cd into /app
WORKDIR /app
# Copy files into container, giving them the same name
COPY package*.json .
COPY main.js .
COPY public public
COPY views views
# Install dependencies
RUN npm ci

### Run ###
ENV APP_PORT=3000
# Expose port. Default is TCP.
EXPOSE ${APP_PORT}

# Run app in shell form.
# Same as ENTRYPOINT ["/vsr/bin/node", "/app/main.js"] (exec form)
# Exec form won't be able to pick up env vars etc, and they will have
# to be explicitly included.
# Dockerfile must have at least one of ENTRYPOINT or CMD.
ENTRYPOINT node main.js
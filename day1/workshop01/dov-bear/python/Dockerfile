FROM python:3.13.0-alpine3.19

# create and cd into /app
WORKDIR /app
# Copy files into container, giving them the same name
COPY main.py .
COPY requirements.txt .
COPY run.sh .
COPY utils.py .
COPY public public
COPY templates templates

# Install dependencies
RUN python3 -m pip install --upgrade pip setuptools wheel
RUN python3 -m pip install -r requirements.txt

### Run ###
ENV APP_PORT=3000
# Expose port. Default is TCP.
EXPOSE ${APP_PORT}

# Run app in shell form.
# Same as ENTRYPOINT ["/vsr/bin/node", "/app/main.js"] (exec form)
# Exec form won't be able to pick up env vars etc, and they will have
# to be explicitly included.
# Dockerfile must have at least one of ENTRYPOINT or CMD.
ENTRYPOINT python3 main.py --port=${APP_PORT}
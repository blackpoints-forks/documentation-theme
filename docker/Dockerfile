FROM alpine:3.11.2

RUN apk upgrade --no-cache \
  && apk add --no-cache \
    python3 \
    python3-dev \
  && pip3 install --no-cache-dir --upgrade pip \
  && rm -rf /var/cache/* \
  && rm -rf /root/.cache/*

RUN cd /usr/bin \
  && ln -sf python3 python \
  && ln -sf pip3 pip

RUN pip install nltk==3.4.5
RUN pip install mkdocs pyaml pymdown-extensions
WORKDIR /src/usr/app/
ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
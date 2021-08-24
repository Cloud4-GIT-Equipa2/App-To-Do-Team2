FROM python:3-alpine

RUN apk add --no-cache curl sed && pip install 'mongo-connector[elastic5]' 'elastic2-doc-manager[elastic5]'

COPY startup.sh /tmp/

VOLUME /data

CMD ["/bin/bash", "/tmp/startup.sh"]

#ENTRYPOINT ["mongo-connector"]
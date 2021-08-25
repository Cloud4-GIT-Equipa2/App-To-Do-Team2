FROM python:3-alpine

RUN apk add --no-cache curl sed && pip install 'mongo-connector[elastic5]' && pip install 'elastic2-doc-manager[elastic5]'

COPY ./mongo-connector.conf /data/config/mongo-connector.conf

ENTRYPOINT ["mongo-connector"]

#COPY startup.sh /tmp/

#VOLUME /data

#CMD ["/bin/bash", "/tmp/startup.sh"]
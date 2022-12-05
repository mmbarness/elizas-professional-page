FROM codercom/enterprise-node:ubuntu

USER root

RUN mkdir -p /home/dev/elizas-professional-page

WORKDIR /home/dev/elizas-professional-page

COPY . .

RUN npm install

#docker build -t mmbarness/elizas-professional-page -f coder.Dockerfile .
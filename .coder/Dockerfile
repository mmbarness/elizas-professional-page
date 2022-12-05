FROM codercom/enterprise-node:ubuntu

USER coder

WORKDIR /home/coder
RUN git clone https://github.com/mmbarness/elizas-professional-page.git

WORKDIR /home/coder/elizas-professional-page
RUN npm install

#docker build -t mmbarness/elizas-professional-page -f coder.Dockerfile .
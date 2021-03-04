FROM registry.cognitant.com/library/node12-focal

ARG NPM_USER
ARG NPM_PASS
ARG NPM_EMAIL
ARG NPM_REGISTRY

WORKDIR /app

RUN apt-get update && apt-get install -y jq

RUN npm set registry $NPM_REGISTRY
RUN npm_login.sh $NPM_USER $NPM_PASS $NPM_EMAIL

ADD package.json /app/package.json
RUN npm install
ADD src /app/src
ADD gatsby-browser.js /app/gatsby-browser.js
ADD gatsby-config.js /app/gatsby-config.js
ADD gatsby-node.js /app/gatsby-node.js
ADD gatsby-ssr.js /app/gatsby-ssr.js
RUN npm cache clean --force && npm run build
ADD config.json /app/config.json
ADD webserve /app/webserve
RUN npm run buildwebserve

ADD launch.sh /launch.sh
ADD replacer.sh /replacer.sh
RUN chmod +x /launch.sh /replacer.sh

CMD "/launch.sh"

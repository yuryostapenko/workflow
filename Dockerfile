FROM amazonlinux:latest

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash - && \
    yum install -y \
    nodejs
    
# Install the Serverless framework
RUN npm install -g serverless
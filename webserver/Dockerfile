FROM python:alpine3.7
RUN pip install --upgrade pip
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE  8891
CMD python ./rest_app.py
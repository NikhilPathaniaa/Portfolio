FROM maven:3.8.3-openjdk-8 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:8-jdk-slim
COPY --from=build /target/portfolio-0.0.1-SHAPSHOT.jar demo.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","demo.jar"]

FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build target/*.jar demo.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","demo.jar"]
FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build/targer/portfolio-0.0.1-SHAPSHOT.jar portfolio.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","portfolio.jar"]
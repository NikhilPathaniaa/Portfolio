# Use a multi-stage build to reduce the final image size
# First stage: build the JAR file
FROM maven:3.8.3-openjdk-8 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Second stage: create the final image
FROM openjdk:8-jdk-slim
WORKDIR /app
# Copy the JAR file from the build stage
COPY --from=build /app/target/portfolio-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 80
ENTRYPOINT ["java", "-jar", "demo.jar"]

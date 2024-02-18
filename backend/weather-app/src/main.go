package main

import (
	"context"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type WeatherData struct {
	Temp float32 `json:"lampotila"`
}

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	returnvalue := events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body: "lol",
	}
	return returnvalue, nil
}

func main() {
	lambda.Start(handler)
}

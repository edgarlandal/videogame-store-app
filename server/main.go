package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/google/uuid"
)

type User struct {
	Id        string
	FirstName string
	LastName  string
}

func handlerUser(c *fiber.Ctx) error {
	user := User{
		Id:        "x",
		FirstName: "Edgar",
		LastName:  "Landa",
	}
	return c.Status(fiber.StatusOK).JSON(user)
}

func handlerCreateUser(c *fiber.Ctx) error {
	user := User{}
	if err := c.BodyParser(&user); err != nil {
		return err
	}

	user.Id = uuid.New().String()
	return c.Status(fiber.StatusOK).JSON(user)
}

func main() {
	app := fiber.New()

	app.Use(logger.New())

	usersGroup := app.Group("/users")

	usersGroup.Get("", handlerUser)
	usersGroup.Post("", handlerCreateUser)

	app.Static("/", "../client/dist")

	app.Listen(":3000")

}

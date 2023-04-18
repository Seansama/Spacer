# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
booking1 = Booking.create(title: "Sales Meeting", body: "Discuss quarterly sales projections", user_id: user1, space_id: space1.id, status: "confirmed")
booking2 = Booking.create(title: "Product Demo", body: "Demo new product to potential clients", user_id: user2, space_id: space1.id, status: "pending")
booking3 = Booking.create(title: "Team Building Event", body: "Team building exercises and activities", user_id: user1, space_id: space2.id, status: "confirmed")

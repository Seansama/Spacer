# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# in db/seeds.rb

# create some users
user1 = User.create(username: "Alice")
user2 = User.create(username: "Bob")
user3 = User.create(username: "Charlie")

# create some spaces
space1 = Space.create(name: "Conference Room A")
space2 = Space.create(name: "Training Room B")
space3 = Space.create(name: "Meeting Room C")

# create some bookings
Booking.create(title: "Meeting with client", 
               body: "Discuss new project requirements with Acme Inc.", 
               user: user1, space: space1, status: "approved")
Booking.create(title: "Training session", 
               body: "Teach new employees about company policies and procedures", 
               user: user2, space: space2, status: "pending")
Booking.create(title: "Team meeting", 
               body: "Discuss progress on current projects and upcoming deadlines", 
               user: user3, space: space3, status: "approved")

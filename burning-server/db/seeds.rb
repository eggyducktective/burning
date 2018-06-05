# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Airplane.destroy_all
Flight.destroy_all
Reservation.destroy_all

# User
u1 = User.create name: "Brendan", admin_flag: true, password: "chicken", password_confirmation: "chicken"
u2 = User.create name: "Anna", admin_flag: false, password: "chicken", password_confirmation: "chicken"
u3 = User.create name: "Bagi", admin_flag: true, password: "chicken", password_confirmation: "chicken"
puts "Created [#{ User.all.length }] Users"

# Airplane
a1 = Airplane.create name: "747", rows: 30, cols: 4
a2 = Airplane.create name: "757", rows: 22, cols: 2
a2 = Airplane.create name: "767", rows: 18, cols: 4
puts "Created [#{ Airplane.all.length }] Airplanes"

# Flight
f1 = Flight.create flight_number: "BA001", airplane_id: 1, flight_date: "2018/06/01", origin: "SYD", destination: "MEL"
f2 = Flight.create flight_number: "BA556", airplane_id: 1, flight_date: "2018/06/02", origin: "MEL", destination: "BNE"
f3 = Flight.create flight_number: "BA999", airplane_id: 2, flight_date: "2018/06/02", origin: "SYD", destination: "PER"
f4 = Flight.create flight_number: "BA810", airplane_id: 3, flight_date: "2018/06/07", origin: "CNS", destination: "ASP"
puts "Created [#{ Flight.all.length }] Flights"

# Reservation
r1 = Reservation.create user_id: 1, flight_id: 1, row: 10, col: 4
r2 = Reservation.create user_id: 2, flight_id: 2, row: 20, col: 1
r3 = Reservation.create user_id: 3, flight_id: 2, row: 20, col: 2
r4 = Reservation.create user_id: 1, flight_id: 3, row: 15, col: 2
r5 = Reservation.create user_id: 3, flight_id: 4, row: 8, col: 3
puts "Created [#{ Reservation.all.length }] Reservations"

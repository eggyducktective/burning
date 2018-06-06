class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations
  has_many :users, through: :reservations

  def available_seats
    # puts "ID: #{ self.id }"
    # total_seats = self.airplane.rows * self.airplane.cols
    # booked_seats = self.reservations.length
    # total_seats - booked_seats
    (airplane.rows * airplane.cols) - reservations.length
  end

end

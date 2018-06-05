class Reservation < ApplicationRecord
  belongs_to :flight
  has_many :users
end

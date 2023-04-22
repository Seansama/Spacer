class Booking < ApplicationRecord
  belongs_to :user,  class_name: MyNamespace::User

end
class Brand < ApplicationRecord
    has_many :pieces
    has_many :users, through: :pieces 
    has_many :styles, through: :pieces
end

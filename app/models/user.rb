class User < ApplicationRecord
    has_many :pieces
    has_many :brands, through: :pieces
    has_many :styles, through: :pieces

    has_one_attached :featured_image
end

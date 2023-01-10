class Piece < ApplicationRecord
    belongs_to :user
    belongs_to :brand
    belongs_to :style

    # has_one_attached :featured_image

end

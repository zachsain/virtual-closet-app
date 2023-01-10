class Piece < ApplicationRecord
    belongs_to :user
    belongs_to :piece
    belongs_to :style
end

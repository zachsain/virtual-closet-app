class Style < ApplicationRecord
    has_many :pieces
    validates :name, :presence => true, :uniqueness => true

end

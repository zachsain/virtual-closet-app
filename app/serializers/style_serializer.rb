class StyleSerializer < ActiveModel::Serializer
  attributes :id, :name, :url_photo, :description

  has_many :pieces

end

class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :city, :state, :description
  has_one :company
end
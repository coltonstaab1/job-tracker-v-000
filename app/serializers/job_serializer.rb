class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :city, :state, :description, :salary
  has_one :company
end
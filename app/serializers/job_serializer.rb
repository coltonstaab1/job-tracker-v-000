class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :city, :state, :description
end
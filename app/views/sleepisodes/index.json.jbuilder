json.array!(@sleepisodes) do |sleepisode|
  json.extract! sleepisode, :id
  json.url sleepisode_url(sleepisode, format: :json)
end

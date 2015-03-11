class CreateSleepisodes < ActiveRecord::Migration
  def change
    create_table :sleepisodes do |t|
      t.datetime :start_sleepiness
      t.datetime :end_sleepiness
      t.string :reason_sleepiness
      t.string :reason_waking
      t.string :location
      t.integer :hours_slept_last_night
      t.timestamps 
    end
  end
end

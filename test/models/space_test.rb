require 'rails_helper'

RSpec.describe Space, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:location) }
  it { should validate_presence_of(:hourly_rate) }
  it { should validate_presence_of(:daily_rate) }
  it { should validate_presence_of(:available_dates) }

  it { should validate_numericality_of(:hourly_rate).is_greater_than(0) }
  it { should validate_numericality_of(:daily_rate).is_greater_than(0) }
end


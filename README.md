## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|body|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## gruopsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|messages_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- belongs_to :members


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|
|e-mail|text|
|messages_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :members
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


# ShowMe (prototype)

Galaxy webhook that automatically shows results of the latest tool's application
when they are ready.

## Installation
1. Add webhooks dir to the `galaxy.ini` config:
```
echo "webhooks_dir = /path/to/webhooks" >> /path/to/galaxy.ini
```

2. Copy this repo to the dir with webhooks (defined above):
```
cd /path/to/webhooks && git clone https://github.com/inkuzmin/showme.git
```

3. Restart Galaxy



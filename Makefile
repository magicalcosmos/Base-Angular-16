# 添加组件
com-add:
ifeq (${no-test}, true)
	ng g component ${name} --skip-tests
else
	ng g component ${name}
endif

# 添加页面
page-add:
ifeq (${no-test}, true)
	ng g m ${name} --routing && ng g component ${name} --skip-tests
else
	ng g m ${name} --routing && ng g component ${name}
endif

# 构建
build:
	npm run build

# 安装包
pkg-add:
ifeq (${d}, true)
	npm install ${name} -D -d
else
	npm install ${name} -S -d
endif

# 运行
dev:
ifdef ${p}
	ng serve --port ${p} 
else
	ng serve --port 4200
endif

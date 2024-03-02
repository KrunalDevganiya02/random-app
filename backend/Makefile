# Paths

VENV_PREFIX := .venv
# Python and pip commands

PYTHON := $(VENV_PREFIX)/bin/python
PIP := $(VENV_PREFIX)/bin/pip

all: bootstrap install start

bootstrap: ## Create virtual environment
	@ls -d $(VENV_PREFIX) || (echo "Creating virtual environment..." && python -m venv $(VENV_PREFIX))

install: ## Install dependencies
	@echo "Installing dependencies..."
	@$(PIP) install -r requirements.txt

start: ## Run the FastAPI application
	@echo "Starting application..."
	@$(VENV_PREFIX)/bin/uvicorn main:app


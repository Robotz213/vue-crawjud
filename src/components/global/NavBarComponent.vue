<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus, faMaximize, faClose } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <nav
    class="navbar navbar-expand-xl navbar-dark bg-dark fixed-top"
    aria-label="Sixth navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Expand at xl</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample06"
        aria-controls="navbarsExample06"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample06">
        <ul class="navbar-nav me-auto mb-2 mb-xl-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <button class="btn btn-secondary m-1" onclick="window.close()">
          <FontAwesomeIcon :icon="faMinus" />
        </button>
        <button class="btn btn-warning m-1">
          <FontAwesomeIcon :icon="faMaximize" />
        </button>
        <button class="btn btn-danger m-1">
          <FontAwesomeIcon :icon="faClose" />
        </button>
      </div>
    </div>
  </nav>
</template>

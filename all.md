---
layout: default
title: "All"
permalink: /all/
---

<div class="max-w-4xl mx-auto py-8 px-6">
  <h2 class="text-2xl font-bold text-gray-900 mb-8">📆 All Months</h2>
  
  <div class="space-y-8">
    {% assign posts_by_month = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}
    {% for month in posts_by_month %}
      {% assign year = month.name | split: "-" | first %}
      {% assign month_num = month.name | split: "-" | last | plus: 0 %}
      {% assign month_names = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}
      {% assign month_name = month_names[month_num | minus: 1] %}
      
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-6">{{ month_name }} {{ year }}</h3>
        
        <!-- Calendar Grid Header -->
        <div class="grid grid-cols-7 gap-1 text-center mb-2">
          <div class="text-xs font-medium text-gray-400 py-2">S</div>
          <div class="text-xs font-medium text-gray-400 py-2">M</div>
          <div class="text-xs font-medium text-gray-400 py-2">T</div>
          <div class="text-xs font-medium text-gray-400 py-2">W</div>
          <div class="text-xs font-medium text-gray-400 py-2">T</div>
          <div class="text-xs font-medium text-gray-400 py-2">F</div>
          <div class="text-xs font-medium text-gray-400 py-2">S</div>
        </div>
        
        <!-- Mini Calendar Grid (simplified) -->
        <div class="grid grid-cols-7 gap-1">
          <!-- Jan 2026 starts on Wednesday -->
          <div class="aspect-square"></div>
          <div class="aspect-square"></div>
          <div class="aspect-square"></div>
          {% for day in (1..31) %}
            {% assign has_post = false %}
            {% assign post_difficulty = "none" %}
            {% for post in month.items %}
              {% assign post_day = post.date | date: "%d" | plus: 0 %}
              {% if post_day == day %}
                {% assign has_post = true %}
                {% assign post_difficulty = post.difficulty | default: "easy" %}
              {% endif %}
            {% endfor %}
            
            <div class="aspect-square rounded border border-gray-100 bg-white flex items-center justify-center relative text-xs">
              <span class="{% if has_post %}text-gray-700 font-medium{% else %}text-gray-400{% endif %}">{{ day }}</span>
              {% if has_post %}
                {% if post_difficulty == "hard" %}
                  <span class="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                {% elsif post_difficulty == "medium" %}
                  <span class="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                {% else %}
                  <span class="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                {% endif %}
              {% endif %}
            </div>
          {% endfor %}
        </div>
        
        <!-- Posts List for this month -->
        <div class="mt-6 pt-4 border-t border-gray-100 space-y-2">
          {% for post in month.items %}
            <a href="{{ post.url | prepend: site.baseurl }}" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              {% if post.difficulty == "hard" %}
                <span class="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
              {% elsif post.difficulty == "medium" %}
                <span class="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>
              {% else %}
                <span class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
              {% endif %}
              <div class="flex-1 min-w-0">
                <h4 class="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">{{ post.title }}</h4>
                <span class="text-xs text-gray-400">{{ post.date | date: "%b %d" }} · {{ post.type }}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300 group-hover:text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <p class="text-gray-500">No problems solved yet.</p>
    </div>
    {% endif %}
  </div>
</div>
